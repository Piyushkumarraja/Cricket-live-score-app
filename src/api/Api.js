const API_KEY="IH5w6FL2RMN1AVuiuu8blaMjl7r2";
export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    console.log("URL", url);
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log("ERROR ", error);
      });
  };
  
  //get the score of the cuurent match
  
  export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  //Match Scheduled
export const getScheduled = () => {
  const url = `https://cricapi.com/api/matchCalendar?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

// Sports News
const NEWS_API_KEY='10d3b6310f8f4a5db8d57032a3afb62c';
export const getSportsDetail = () => {
  const url = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${NEWS_API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

