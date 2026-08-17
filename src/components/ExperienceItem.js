import React from "react";

const parseDate = (date) => {
    const [year, month, day] = date.split('-').map(Number);
    return new Date(year, month - 1, day);
};

const formatMonthAndYear = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const getMonthsBetween = (date1,date2,roundUpFractionalMonths) =>
    {
        var startDate=date1;
        var endDate=date2;
        var inverse=false;
        
        if(date1>date2)
        {
            startDate=date2;
            endDate=date1;
            inverse=true;
        }

        var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
        var monthsDifference=endDate.getMonth()-startDate.getMonth();
        var daysDifference=endDate.getDate()-startDate.getDate();

        var monthCorrection=0;

        if(roundUpFractionalMonths===true && daysDifference>0)
        {
            monthCorrection=1;
        }
        else if(roundUpFractionalMonths!==true && daysDifference<0)
        {
            monthCorrection=-1;
        }

        return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
    };

const getPrettyDuration = (months) => {
        let fullYears = Math.floor(months / 12);
        let months_after_years = months % 12;

        if (months_after_years > 9){
            fullYears += 1;
            months_after_years = 0;
        }

        if (fullYears > 0 && months_after_years < 3){
            months_after_years = 0;
        }
        
        let result = "· ";
        
        if (fullYears > 0){
            if (fullYears === 1){
                result += "1 yr";
            } else{
                result += "" + fullYears + " yrs";
            }

        }
        if (months_after_years > 0){
            if (months_after_years === 1){
                result+= " 1 mo";
            } else {
                result += " " + months_after_years + " mos";
            }
        }
        
        if (result.length < 4) result = "";
        return result;
    };

const ExperienceItem = ({
    title,
    org,
    start,
    end,
    description,
    isSelected,
    controlsId,
    onSelect,
}) => {
    const startDate = parseDate(start);
    const endDate = end ? parseDate(end) : new Date();
    const startPretty = formatMonthAndYear(startDate);
    const endPretty = end ? formatMonthAndYear(endDate) : 'Present';
    const durationPretty = getPrettyDuration(getMonthsBetween(startDate, endDate, true));

    return(
        <li className="experience-list-item">
            <button
                type="button"
                className={`experience-item${isSelected ? ' experience-item-selected' : ''}`}
                aria-pressed={isSelected}
                aria-controls={controlsId}
                onClick={onSelect}
            >
                <span className="experience-item-title">{title}</span>
                <span>{org}</span>
                <span className="experience-item-date">{startPretty} - {endPretty} {durationPretty}</span>
                {description && <span className="experience-item-description">{description}</span>}
            </button>
        </li>
    );
}

export default ExperienceItem;
