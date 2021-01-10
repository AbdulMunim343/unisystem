import Student from '../../assets/img/navigation/students.svg';
import Teacher from '../../assets/img/navigation/teachers.svg';
import Class from '../../assets/img/navigation/classes.svg';
import Samester from '../../assets/img/navigation/samester.svg';

import Book from '../../assets/img/dashboard/facebook-01.svg';
import Twitter from "../../assets/img/dashboard/twitter-01.svg";
import GooglePlusG from "../../assets/img/dashboard/google+-01.svg";
import LinkedinIn from "../../assets/img/dashboard/linkedin-01.svg";


const Card_data = [
    {
        Cardimg: Student,
        Card_title: "Student",
        Card_number: "5000",
        Icon: Book,
        Icon_title: "Follow Us",
        Member: "30,000"
    },

    {
        Cardimg: Teacher,
        Card_title: "Teachers",
        Card_number: "200",
        Icon: Twitter,
        Icon_title: "Follow Us",
        Member: "1,11,000"
    },


    {
        Cardimg: Class,
        Card_title: "Classes",
        Card_number: "100",
        Icon: GooglePlusG,
        Icon_title: "Follow Us",
        Member: "19,000"
    },

    {
        Cardimg: Samester,
        Card_title: "Samesters",
        Card_number: "2",
        Icon: LinkedinIn,
        Icon_title: "Follow Us",
        Member: "45,000"
    },

];


export default Card_data;