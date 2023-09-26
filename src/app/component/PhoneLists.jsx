import React from 'react'

// async function fetchPhones() {
//     const url = 'https://mobile-phones2.p.rapidapi.com/brands';
//     const apiKey= 'f3f1df1be1msha03d5759a71bb0dp15700ajsn1cbb4632919c'

//     const response = await fetch(url, {
//       headers: {
//           'X-RapidAPI-Key': 'f3f1df1be1msha03d5759a71bb0dp15700ajsn1cbb4632919c',
//       'X-RapidAPI-Host': 'mobile-phones2.p.rapidapi.com'
//       }
     
//   })
//   const phones = await response.json()
  
//   return phones;
//   console.log(phones)
// }
const url = 'https://mobile-phones2.p.rapidapi.com/brands';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3f1df1be1msha03d5759a71bb0dp15700ajsn1cbb4632919c',
		'X-RapidAPI-Host': 'mobile-phones2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const PhoneLists = () => {

    
  return (
    <div>PhoneLists</div>
  )
}

export default PhoneLists