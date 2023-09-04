/* eslint-disable react/prop-types */

function DetailPage({ location }) {
  const { formData } = location.state || {}; 

  return (
    <div>
      <h2>Detail Page</h2>
      {formData && (
        <div>
          <h2>{formData.country}</h2>
          <p>Name: {formData.name}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default DetailPage;

