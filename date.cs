using System;
namespace DifferenceTime{


    class date{
        public static void Main(string[] args){
            DateTime d1=new DateTime(2018,6,23,5,46,34);
            DateTime d2=new DateTime(2015,8,03,6,26,24);
            DifferenceTime.Diff.diff(d1,d2);
        }
    }
    class Diff{
        public static void diff(DateTime t1, DateTime t2)
        {
             TimeSpan interval=t1-t2;
            System.Console.WriteLine(interval);
        }
        
    }
}