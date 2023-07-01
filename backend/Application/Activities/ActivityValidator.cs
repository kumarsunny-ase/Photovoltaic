using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using FluentValidation;

namespace Application.Activities
{
    public class ActivityValidator : AbstractValidator<Activity>
    {

        public ActivityValidator()
        {
        RuleFor(x => x.PowerPeak).NotEmpty();
        RuleFor(x => x.Orientation).NotEmpty();
        RuleFor(x => x.Inclination).NotEmpty();
        RuleFor(x => x.Area).NotEmpty();
        RuleFor(x => x.Longitude).NotEmpty();
        RuleFor(x => x.Latitude).NotEmpty();
        }
    }
}