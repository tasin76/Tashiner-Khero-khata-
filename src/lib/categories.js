export const categories = [
  { name: 'গল্প', slug: 'golpo' },
  { name: 'কবিতা', slug: 'kobita' },
  { name: 'ইতিহাস', slug: 'itihas' },
  { name: 'পাঠ প্রতিক্রিয়া', slug: 'path-protikriya' },
  { name: 'সিনেমা পর্যালোচনা', slug: 'cinema' },
  { name: 'বিবিধ', slug: 'bibidho' },
];
export const slugOf = (name) => categories.find((c) => c.name === name)?.slug ?? 'bibidho';
