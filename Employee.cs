using System;
namespace emp{
    class GetEmp{
       // string name;
        //string address;

        

        public static void Enterdetails(){
            string name;
            string address;
            System.Console.WriteLine("Enter the number of employees");
            int num = Convert.ToInt32(System.Console.ReadLine());
            string[] details =new string[num*2];
            for(int i=0; i<num*2; i=i+2)
            {
                System.Console.WriteLine("Name: ");
                details[i]=Console.ReadLine();
                System.Console.WriteLine("Address: ");
                details[i+1]=Console.ReadLine();
            }
            System.Console.WriteLine();
            System.Console.WriteLine("--------------------");
            System.Console.WriteLine("Printing the details");
            System.Console.WriteLine("--------------------");
            System.Console.WriteLine();
            
            for(int i=0; i<num*2; i=i+2)
            {
                System.Console.WriteLine("Name: "+details[i]);
                System.Console.WriteLine("Address: "+details[i+1]);
            }
            
        }
    }
    class ShowEmp{
        public static void Main(string[] args)
        {
           emp.GetEmp.Enterdetails();
        }
    }
}