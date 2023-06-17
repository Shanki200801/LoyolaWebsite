export default function handler(req, res) {
  res.status(200).json({
    total_no_books: 5420,
    tot_ref_books: 589,
    SCST_book_bank: 574,
    competitive_books: 24,
    donated_books: 1617,
    tot_national_journals: 5,
    tot_international_journals: 3,
    magazines: 8,
    newspapers: 8,
  });
}
