import React from 'react';

const AgeFromDate = ({birthdate})  => {
    const getAge = () => {
        var ageDate = new Date(Date.now() - Date.parse(birthdate))
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    return (
        <span>{getAge()}</span>
    );
}

export default AgeFromDate;