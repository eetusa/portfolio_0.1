import React, { useEffect, useState } from "react";

const ExperienceItem = (props) => {
    const [startPretty, setStartPretty] = useState("Feb 2022");
    const [endPretty, setEndPretty] = useState("Present");
    const [durationPretty, setDurationPretty] = useState("1 yr");

    function getMonthsBetween(date1,date2,roundUpFractionalMonths)
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
        
        let result = "~ ";
        
        if (fullYears > 0){
            if (fullYears === 1){
                result += "1 yr";
            }else{
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
    }

    useEffect(() => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const start_array = props.start.split(',');
        const start_month = months[ start_array[1]-1 ];
        const start_year = start_array[0];
        setStartPretty(start_month + " " + start_year)

        const startDate = new Date(props.start);
        let endDate = new Date();

        if (typeof props.end === 'undefined' ){
            setEndPretty("Present");
        } else {
            const end_array = props.end.split(',');
            const end_month = months[ end_array[1]-1 ];
            const end_year = end_array[0];
            setEndPretty(end_month + " " + end_year)
            endDate = new Date(props.end);
        }

        let months_diff = getMonthsBetween(startDate, endDate, true);
        let pretty_duration = getPrettyDuration(months_diff);
        setDurationPretty(pretty_duration);

    }, [props.start, props.end])

    return(
        <div className="experience-item">
            <span>{props.title}</span>
            <span>{props.org}</span>
            <span>{startPretty} - {endPretty} {durationPretty}</span>
        </div>
    );
}

export default ExperienceItem;