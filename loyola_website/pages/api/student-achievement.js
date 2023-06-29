export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Academic Achievements of Students",
      description: [
        "Out of 123 students who appeared for the 5th semester examination, 6 turned out to be Outstanding and 33 First Class Exemplary. 102 students appeared for the 3rd semester examination, amongst whom 30 students secured First Class Distinction and 31 secured First Class.",
      ],
      table: [
        { id: 1, regNo: "19ITC41045", name: "Girivardhana T M", GPA: "9.1" },
        { id: 2, regNo: "19ITC41064", name: "Kishor T R", GPA: "9.25" },
        { id: 3, regNo: "19ITC41065", name: "Kousalya V", GPA: "9.2" },
        { id: 4, regNo: "19ITC41071", name: "Lipsa Nayak", GPA: "9.0" },
        { id: 5, regNo: "19ITC41076", name: "Manjunatha V", GPA: "9.18" },
        { id: 6, regNo: "19ITC411724", name: "Sharanabasava M", GPA: "9.28" },
      ],
    },
    {
      id: 2,
      title: `Karnataka's Young Poet`,
      description: `Shan Michael participated in various districts and state events and competitions, winning prestigious recognitions. He has secured 2nd place in vernacular singing held at Mount Carmel college, 1st place in state level poetry writing and presentation, 1st in state level Bhavageethe competition, chosen as 'Master of the ceremony' for Vishwa Kannada Sahithya Parishad 2021, Awarded as 'Karnataka's young poet', and nominated for 'Kittur Rani Chanammasahithi' award, Karnataka Literature Star Award and many more. `,
    },
    {
      id: 3,
      title: ` Dr APJ Abdul Kalam International Level Essay Writing Contest`,
      description: `Mr. Rahul Chettri of Loyola Degree College, Bangalore, won the 1st prize in Dr APJ Abdul Kalam International Level Essay Writing Contest, Season-5. The essay competition was based on the theme, “Category 2 Covid 19 and Remote Learning: Is this a Change for Good”. The contest was conducted by IFIM COLLEGE (AUTONOMOUS) Bangalore in collaboration with NAAC & E-LEAD. `,
    },
    {
      id: 4,
      title: `Trans Strains' which focused the life of Transgender community `,
      description: `Kusuma S III - BA, Rahul Chettri II - BA, Binouy D'costa, Shan Michael, and Sana Fathima I - BA, bagged the second place for their heart-wrenching documentary 'Trans Strains' which focused the life of transgender community Bangalore during pandemic. The documentary is directed by Sana. `,
    },
    {
      id: 5,
      title: `Documentary on the Police Forces`,
      description: `Nishant Agarwal, Hemanth G of II-BA, Priyanka of  I-BA, and Rukshar of I-B.Com A, fetched the third prize for their motivating documentary on Police, directed by Nishant. The winners were awarded with cash prize and e-certificates on the valedictory. The screening of the documentary will take place on Human Rights Day, December 10, 2021 at St Joseph's Law College, Bangalore. `,
    },
  ]);
}
