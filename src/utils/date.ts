import { logger } from "./logger";

export const parseDate = (date: string) => {
  /*
 parse date from 
   '*Berlaku per 1 Februari 2023',
  '*Berlaku per 3 Januari 2023 Pukul 14:00 WIB',
  '*Berlaku per 3 September 2022'
 */
  const regex = /(\d{1,2})\s(\w+)\s(\d{4})/g;
  const match = regex.exec(date);

  if (!match) {
    const error = `[!] Date "${date}" is not valid`;
    logger.error(error);
    return new Error(error);
  }

  const [, day, month, year] = match;

  const rawDate = `${year}-${formatMonth(month)}-${formatDay(day)}`;

  return new Date(`${rawDate}T00:00:00.000Z`).toISOString();
};

const formatDay = (day: string) => {
  const dayNumber = parseInt(day, 10);
  if (dayNumber < 10) {
    return `0${dayNumber}`;
  }
  return dayNumber;
};

const formatMonth = (month: string) => {
  const namaBulan = [
    {
      id: "Januari",
      en: "January",
      num: "01",
    },
    {
      id: "Februari",
      en: "February",
      num: "02",
    },
    {
      id: "Maret",
      en: "March",
      num: "03",
    },
    {
      id: "April",
      en: "April",
      num: "04",
    },
    {
      id: "Mei",
      en: "May",
      num: "05",
    },
    {
      id: "Juni",
      en: "June",
      num: "06",
    },
    {
      id: "Juli",
      en: "July",
      num: "07",
    },
    {
      id: "Agustus",
      en: "August",
      num: "08",
    },
    {
      id: "September",
      en: "September",
      num: "09",
    },
    {
      id: "Oktober",
      en: "October",
      num: "10",
    },
    {
      id: "November",
      en: "November",
      num: "11",
    },
    {
      id: "Desember",
      en: "December",
      num: "12",
    },
  ];

  const bulan = namaBulan.find((item) => item.id === month)?.num;

  if (!bulan) {
    const error = `[!] Month "${month}" is not valid`;
    logger.error(error);
    return new Error(error);
  }

  return bulan;
};
