using System;
namespace shape{
    class rectangle{
        public static void area(int length, int width){
        int area = length * width;
        System.Console.WriteLine("Area of rectangle: "+area);
        }
    }
    class square{
        public static void area(int side){
        int area = side*side;
        System.Console.WriteLine("Area of square: "+area);
        }
    }
    class operate{
    public static void Main(string[] args)
    {
        operate op =new operate();
        shape.rectangle.area(5,4);
        shape.square.area(5);
    }
    }

}