const apiKey = 'C9eMB_VBxsW_jtCjXALIqWPVUsW7B9uKOQjR6CGlma07N7W7mSsDx8SxA0Mb7MW6--H6yqB0VO-5zAtDk8KuiN2pxFmQDtesuU4vZZ9vQzGbtsLVULMwNiafMMZ-W3Yx'; // Insert API key here.

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
