import styled from "styled-components";

const WeatherLogo =styled.img`
width: 140px;
height: 142px;
margin: 40px auto;
`;

const ChooseCityLabel =styled.span`
color:black;
font-size: 20px;
color:grey;
font-weight: bold;
margin: 10px auto;
`;

const SearchBox =styled.form`
display: flex;
flex-direction: row;
border: black solid 2px;
border-radius: 4px;
color:black;
font-weight: bold;
margin: 20px auto;

& input{
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
}

& button{
    color:grey;
    background-color:rgb(2, 23, 41);
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
}
`;

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
        <WeatherLogo src="https://media.giphy.com/media/KcB1hVNF5pJyFQtHz9/giphy.gif"/>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" 
        onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};
export default CityComponent;