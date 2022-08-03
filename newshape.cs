using System;
namespace shape{

    class operate{
    public void area(int length, int width){
        int area = length * width;
        System.Console.WriteLine("Area of rectangle: "+area);
        }

    public void area(int side){
        int area = side*side;
        System.Console.WriteLine("Area of square: "+area);
        }
    public static void Main(string[] args)
    {
        operate op =new operate();
        op.area(5,4);
        op.area(5);
    }
    }

}