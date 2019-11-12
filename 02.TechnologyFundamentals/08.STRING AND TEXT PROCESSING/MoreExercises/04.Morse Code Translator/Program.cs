using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.Morse_Code_Translator
{
    class Program
    {
        static void Main(string[] args)
        {
            string morseCode = Console.ReadLine();
            

            morseCode = morseCode             
                .Replace("-...", "B")
                .Replace("-.-.", "C")             
                .Replace("..-.", "F")              
                .Replace("....", "H")               
                .Replace(".---", "J")               
                .Replace(".-..", "L")                               
                .Replace(".--.", "P")
                .Replace("--.-", "Q")               
                .Replace("...-", "V")                
                .Replace("-..-", "X")
                .Replace("-.--", "Y")
                .Replace("--..", "Z")
                .Replace(".-.", "R")
                .Replace("...", "S")
                .Replace("..-", "U")
                .Replace("---", "O")
                .Replace("-.-", "K")
                .Replace("--.", "G")
                .Replace("-..", "D")
                .Replace(".--", "W")
                .Replace("..", "I")
                .Replace("--", "M")
                .Replace("-.", "N")
                .Replace(".-", "A")
                .Replace(".", "E")
                .Replace("-", "T")
                .Replace(" ", string.Empty)
                .Replace("|", " ");
            Console.WriteLine(morseCode);
                

        }
    }
}
