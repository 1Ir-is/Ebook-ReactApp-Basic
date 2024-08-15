
export const Rating = ({ rating }) => {

    let ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }

  return (
    <>
        { ratingArray.map((star, index) => (
            <i key={index} className={`mr-1 bi bi-star-fill text-yellow-500 ${star ? 'text-yellow-500' : 'text-gray-300'}`}></i>
        )) }
    </>
  )
}
