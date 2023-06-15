import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const StuCouncil = ()=>{

    const councilMembers = [[{role: "President",
    name: "Mr  Hemanth V",
    class: "3rd B Com B"},{role: "Vice-President",
    name: "Ms Sharal Acquinas",
    class: "3rd B Com B"}], [{role: "Secretary",
    name: "Mr. Nikhil Teja",
    class: "2nd  B Com C"},{role: "Joint  Secretary",
    name: "Mr. Vivek Kumar Mourya",
    class: "1st B Com B"}], [{role: "Cultural Secretary",
    name: "Mr Shan Michael",
    class: "2nd B A"},{role: "Sport Secretary",
    name: "Mr Shreekanth R",
    class: "3rd B Com A"}]];

    return (
        <div className='bg-white text-black px-6'>
            <h1 className='flex justify-center text-4xl pt-5'>Student Council</h1>
            <div className='text-justify mt-10'>
                Student Councils the world over is student-led civic organizations designed to help promote College spirit and leadership among students. Students benefit immensely from being involved in student councils - they learn leadership skills, they have an opportunity to gain experience in public speaking, they learn organizational skills and cope with challenges beyond their everyday college life, they learn how to resolve conflict amicably and diplomatically.
            </div>
            <h2 className='flex justify-center text-xl my-5'>Council Members</h2>
            {councilMembers.map((item,index)=>{
                return (
                    <div className='grid grid-cols-2 gap-8 h-48'>
            <Card className='self-start h-5/6 text-center p-1 grid justify-center items-center'>
                <CardContent>
                <p>{item[0].role}</p>
                <p>{item[0].name}</p>
                <p>{item[0].class}</p>
                </CardContent>
            </Card>
            <Card className='self-end h-5/6 text-center p-1 grid justify-center items-center'>
                <CardContent>
                <p>{item[1].role}</p>
                <p>{item[1].name}</p>
                <p>{item[1].class}</p>
                </CardContent>
            </Card>
            </div>
                );
            })}
            <div>
            <p>Students benefit immensely from being involved in student councils - they learn leadership skills, they have an opportunity to gain experience in public speaking, they learn organizational skills and cope with challenges beyond their everyday college life, they learn how to resolve conflict amicably and diplomatically.</p>
            
            <p>Most of all they learn how to make a positive impact on the college and community environment.</p>
            </div>
            <h2>Benefits of Student Council</h2>
            <div>
            It gives students a practical, first-hand understanding of how democracy functions by giving them a voice and a chance to contribute to the functioning of the college. A democratically elected student council allows students to practice leadership and decision-making skills as well as working hard for the benefit of their college community. Students have to think about and communicate to the electorate all the qualities that make them ideal candidates for the particular post they are interested in. The entire process right from submitting their candidature, preparing their speech, convincing the students to vote for them, getting elected, and performing their duties as responsible representatives of the student body implicitly helps students understand the true meaning of democracy.
            </div>
            <div>
            They take responsibility for voicing the opinions and ideas of the general student body, as well as informing fellow students about current endeavors within the Student Council. In addition to planning events that contribute to college spirit, the student council is the voice of the student body. They help share student ideas, interests and concerns of the college community.
            </div>
            <button>Student Council Election Report 2022</button>
        </div>
    );
}

export default StuCouncil;