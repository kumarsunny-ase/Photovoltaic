using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; }
        public string ProductName { get; set; }
        public double PowerPeak { get; set; }
        public string Orientation { get; set; }
        public double Inclination { get; set; }
        public double Area { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public DateTime Date { get; set; }


    }
}