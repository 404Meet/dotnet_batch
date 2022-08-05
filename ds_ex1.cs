using System;
using System.Collections.Generic;
using System.Collections;

namespace DS{
class Array { 
    static int []arr = {10, 20,30,40,50,60,70,80,90,100};
    public static int largest()
    {
        int itr;
        int max = arr[0];
        for (itr = 1; itr < arr.Length; itr++)
            if (arr[itr] > max)
                max = arr[itr];
        return max;
    }
}
public class Arrlist{
    public static void largest(){
      ArrayList Values = new ArrayList();
      Values.Add(10);
      Values.Add(20);
      Values.Add(30);
      Values.Add(40);
      int i= Values.Count;
      Values.Sort();
      Console.WriteLine("Largest in given "
                  + "arraylist is " + Values[i-1]);
              
    }
    
}

public class Linkedlist1{
    public static void largest(){
        LinkedList<int> my_list = new LinkedList<int>();
        my_list.AddLast(10);
        my_list.AddLast(20);
        my_list.AddLast(30);
        my_list.AddLast(40);
        my_list.AddLast(50);
        my_list.AddLast(60);
       int max = int.MinValue;
            foreach (int i in my_list)  {
                if (i > max) max = i;
            }
            System.Console.WriteLine("Largest number of LinkedList is: " + max);
    }


}

/*
public class Linkedlist{

    public class Node
    {
        public int data;
        public Node next;
    }
    static Node head = null;

    public int largestElement(Node head)
    {
        
        int max = int.MinValue;
        while (head != null)
        {
            if (max < head.data)
                max = head.data;
            head = head.next;
        }
        return max;
    }
     public void push(int data)
    {
        Node newNode = new Node();
        newNode.data = data;
        newNode.next = (head);
        (head) = newNode;
    }
}
*/
class Operator {
    public static void Main()
    {
        Console.WriteLine("Largest in given "
                  + "array is " + Array.largest());
        Arrlist.largest();
        Linkedlist1.largest();
        //Linkedlist ll =new Linkedlist();
        //Node head = new Node();
        //ll.push( 15);
        //ll.push( 14);
        //ll.push( 13);
        //ll.push( 22);
        //ll.push( 17);
        //ll.largestElement(head);


    }
}
}

    