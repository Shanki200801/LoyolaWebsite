export default function handler(req, res){
    res.status(200).json(
       [
        {
            id: 1,
            profileimage: '/staff-photos/placeholder.png',
            name: 'Dr Fr Alphonse Pius Fernandes SJ',
            designation: 'Principal',
            education: 'M A Sociology, M A Philosophy, Ph D, NET, SLET ',
            description: 'Nine years of teaching experience. Areas of interest and research – Higher Education, Social Change, Social Development, Marginalised Groups, Christianity, Minorities, Civil Society, Social Engagement, Philosophy, Theology.  '
          },
          {
              id: 2,
              profileimage: '/staff-photos/placeholder.png',
              name: 'DR VINCENT A',
              designation: 'Vice-Principal, Assistant Professor, Department of English',
              education: 'M A, M Ed, Ph D',
              description: 'Forty years of teaching experience. Has a diploma in Carnatic Music and Theatre Areas of interest Education, Teaching methodology, Cultural action, Theatre, Music.'
            },
            //changed till here
            {
              id: 3,
              profileimage: '/staff-photos/placeholder.png',
              name: 'Karthik K K ',
              designation: 'Physical Education Director Department, Physical Education Department ',
              education: 'BBM, M.P.Ed, NET',
              description: 'Worked as Physical education director at Sharada Vidyaniketana School, Mangalore for 6 months. Physical Education Director at Loyola Degree College, Bangalore.  Represented All India Inter University Softball tournament For 5 years and captained the team twice.  Represented St.Aloysius College softball team for three years and secured FIRST place three times.  Represented Mangalore University campus Softball team two times and secured 4th place.  Represented Mangalore University campus handball team and secured third place.'
            },
            {
              id: 4,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR VIGNESH',
              designation: 'Assistant Professor and HOD, Department of Political Science',
              education: 'M A, B Ed, PGDIT, KSET',
              description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
            },
       ]
 );
}