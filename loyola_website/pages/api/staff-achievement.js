export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      description: `Mr. Ravikumar P G was invited as a resource person in a webinar titled, “Sharanaru:  panchaachaara – sapthachaaraparikalpane”, organized by siddha mangala seva kendra on August 25, 2021.  He was also a recipient of “Kayakayogiprashasthi” by the same Kendra and the award was given on August 7, 2021.`,
    },
    {
      id: 2,
      description: `•	Ms Swetha Wenona Suvarna from the Department of Commerce cleared the KSET in the month January 2021.`,
    },
  ]);
}
