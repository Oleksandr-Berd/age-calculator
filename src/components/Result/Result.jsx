import * as SC from "./ResultStyled";

const Result = ({ birthDay }) => {
  const empty = "--";

  const { day, months, year } = birthDay || {};

  const birth = new Date(year, months - 1, day);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let monthsDiff = today.getMonth() - birth.getMonth();
  let daysDiff = today.getDate() - birth.getDate();

 if (daysDiff < 0) {
    monthsDiff -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }

  if (monthsDiff < 0) {
    years -= 1;
    monthsDiff += 12;
  }

  return (
    <SC.ResultStyled>
      <p>
        {daysDiff ? daysDiff : empty} <span>day{years === 1 ? "" : "s"}</span>
      </p>
      <p>
        {monthsDiff ? monthsDiff : empty}
        <span>month{monthsDiff === 1 ? "" : "s"}</span>
      </p>
      <p>
        {years ? years : empty} <span>year{years === 1 ? "" : "s"}</span>
      </p>
    </SC.ResultStyled>
  );
};

export default Result;
