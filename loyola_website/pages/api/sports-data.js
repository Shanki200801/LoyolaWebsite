export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Inter Class tournaments",
      description: [
        "Various inter class matches were held to enhance their social interaction and test one’s physical ability.  These competitions gave a break to the students from their routine work and energised them. The following were the matches which were held at the campus",
      ],
      table: [
        {
          id: 1,
          Sport: "Football (Men)",
          date: "21/10/2021",
          semifinals: [`III B.com 'B' vs I B.com 'A'`, `B.A vs II B.com 'B'`],
          finals: "B.A vs I B.com 'A'",
          winner: "B.A",
        },
        {
          id: 2,
          Sport: "Throwball (Women)",
          date: "3/11/2021",
          semifinals: [`II B.com 'B' vs III B.com 'A'`, `B.A vs II B.com 'B'`],
          finals: "III B.com 'A' vs II B.com 'A'",
          winner: "III B.com 'A'",
        },
        {
          id: 3,
          Sport: "Kabaddi (Men)",
          date: "16/11/2021",
          semifinals: [
            `I B.com 'C' vs I B.com 'A'`,
            `III B.com 'A' vs II B.com 'B'`,
          ],
          finals: "II B.com 'B' vs I B.com 'A'",
          winner: "II B.com 'B'",
        },
        {
          id: 4,
          Sport: "Kabaddi (Women)",
          date: "16/11/2021",
          semifinals: [
            `II B.com 'B' vs III B.com 'B'`,
            `I B.com 'C' vs II B.com 'A'`,
          ],
          finals: "II B.com 'A' vs II B.com 'B'",
          winner: "II B.com 'A'",
        },
      ],
    },
    {
      id: 2,
      title: `St. Joseph College, Hassan Football tournament`,
      description: [
        `On December 3, 2021, eight Loyola Degree College students had been to St. Joseph's College in Hassan for a football tournament, where the team lost in the quarterfinals `,
      ],
    },
    {
      id: 3,
      title: ` Inter Collegiate Athletics meet`,
      description: [
        `Fifteen boys and seven girls from Loyola Degree College took part in the 56th Inter-Collegiate Athletics Meet held at SAI, Bangalore from December 16 to18, 2021. Srikanth, a student from II B.com 'B' secured the bronze in Long jump.  `,
      ],
    },
    {
      id: 4,
      title: `State Level kabaddi participation `,
      description: [
        `Mr. Shivaji K of III B.com ‘B’ was selected for the state-level kabaddi championship, which was held in Shivamogga at Amateur Kabaddi Sports Federation of India from 12 to 14 November 2021.  `,
      ],
    },
    {
      id: 5,
      title: `Inter college Kabaddi tournament`,
      description: [
        `Inter college kabaddi private tournament was held at BES college Jayanagar on 30 December 2021. The college team reached until to the quarter finals  and 10 students from our college participated in this event. `,
      ],
    },
  ]);
}
