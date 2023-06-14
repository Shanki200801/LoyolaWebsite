export default function handler(req, res){
    res.status(200).json(
       [
        {
            id: 1,
            profileimage: '/staff-photos/placeholder.png',
              name: 'SHRADHA',
              designation: 'Lecturer, Department of English',
              education: 'M A',
              description: 'Interests: Reading, cinema and research.'
          },
          {
              id: 2,
              profileimage: '/staff-photos/placeholder.png',
              name: 'DR RAVIKUMARA P G',
              designation: 'Assistant Professor, Department of Kannada',
              education: 'M A, M Phil, B Ed., NET, Ph D',
              description: 'Fifteen years of teaching experience.  Director Centre for Social Concern. Presented several papers and authored two books. Member of Text-book committee, Bangalore University.'
            },
            {
              id: 3,
              profileimage: '/staff-photos/placeholder.png',
              name: 'DR V TARA NAIR',
              designation: 'Assistant Professor and HOD, Department of Hindi',
              education: 'M A Geography, M A Hindi , M PhiL , B Ed , Ph D ',
              description: 'Twenty four years of teaching experience.  BOE, Department of Hindi and Annual Scheme Evaluation Chairperson 2022-23, Bangalore University.'
            },
            {
              id: 4,
              profileimage: '/staff-photos/placeholder.png',
              name: 'Dr. Kumaraswamy B E',
              designation: 'Assistant Professor',
              education: 'MA Ph.D. RGNF, NET, K-SET',
              description: `A progressive thinker and writer in Kannada, a critic and researcher. A first rank holder from Hampi University, completed his Doctor of Philosophy on the topic, “The State, Religion and People in Pre Modern Kannada Literature”.  Recipient of the Rajiv Gandhi National Fellowship Award, UGC, New Delhi. Currently is the Dean of Arts, Director of Dr.Ambedkar Study Centre and HOD, Department of Kannada, Loyola Degree College, Bengaluru.  Interests include Pro-life activism, literature, music, marginalized tribes and nomads`
            }

       ]
 );
}