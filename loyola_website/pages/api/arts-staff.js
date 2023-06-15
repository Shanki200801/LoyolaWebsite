export default function handler(req, res){
    res.status(200).json(
        [
            {
                id: 1,
                profileimage: '/staff-photos/placeholder.png',
                name: 'Fr. Pratap Chandru SJ',
                designation: 'Lecturer, Department of Psychology and Counselling',
                education: 'M Sc Psychology',
                description: 'Two year of teaching experience.  Campus minister and counselor.'
              },
              {
                  id: 2,
                  profileimage: '/staff-photos/placeholder.png',
                  name: 'MR DALU JOSE',
                  designation: 'Lecturer, Department of Journalism',
                  education: 'MA, PGDCA, Web designing ',
                  description: 'Interest: Journalism, Corporate communication, Photography, Social media, Film making.'
                },
                {
                  id: 3,
                  profileimage: '/staff-photos/placeholder.png',
                  name: 'MR LAZARUS LEPCHA',
                  designation: 'Assistant Professor and HOD, Department of Journalism ',
                  education: 'MCJ, NET',
                  description: 'Seven years of teaching experience.  Professional in the field of Print and Broadcast Media.  Won Best Television News Presentation Award in Kerala Published paper on Journalism and authored a book ‘Lockdown Diary: Locked and unlocked stories’.  Interests include documentaries, short films, sports and music.  Loves traveling.'
                },
                {
                  id: 4,
                  profileimage: '/staff-photos/placeholder.png',
                  name: 'Mihir Modak ',
                  designation: 'Lecturer, Department of Psychology',
                  education: 'M Sc  ',
                  description: ''
                }
        ]
 );
}