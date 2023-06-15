export default function handler(req, res){
    res.status(200).json(
       [
        {
            id: 1,
            profileimage: '/staff-photos/placeholder.png',
            name: 'MS PHILOMENA LAVINA RODRIGUES',
            designation: 'Office Superintendent',
            education: 'B COM',
            description: ''
          },
          {
              id: 2,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MS ROCHELL RENITA D’SOUZA',
              designation: 'Administrative Staff',
              education: 'M A Economics',
              description: ''
            },
            {
              id: 3,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR ARUNODHAYAN',
              designation: 'Administrative Staff',
              education: 'B Com',
              description: ''
            },
            {
              id: 4,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR ANTHONY ARUN KUMAR',
              designation: 'Administrative Staff',
              education: 'M LISc',
              description: ''
            },
            {
              id: 5,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MS STEPHY ANTHONY',
              designation: 'Administrative Staff',
              education: 'B Sc',
              description: ''
            },
            {
              id: 6,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR THOMAS P',
              designation: 'Support Staff',
              education: 'SSLC',
              description: ''
            },
            {
              id: 7,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR SANJOY JAMATIA',
              designation: 'Support Staff',
              education: 'Class VII',
              description: ''
            },
            {
              id: 8,
              profileimage: '/staff-photos/placeholder.png',
              name: 'MR YANKAPPA',
              designation: 'Support Staff',
              education: '',
              description: ''
            },   
       ]
 );
}