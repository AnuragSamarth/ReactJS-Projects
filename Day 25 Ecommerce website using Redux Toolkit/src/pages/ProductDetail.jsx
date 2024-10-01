import { Star } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsync } from "../slices/productsDetailsSlice";

function ProductDetail() {
 const {id} =  useParams();
 const productId = +id;
 const dispatch = useDispatch();

 const { products, loading, error } = useSelector((state) => state.product);

     // Scroll to the top when this component mounts         
     window.scrollTo(0, 0);

   // Fetch products when the component mounts if they aren't already loaded
   useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAsync());
    }
  }, [dispatch, products.length]);  

  const filterProduct = products.find((item)=> item.id === productId)
  // console.log(filterProduct)

  if(loading){
    return <h1>Loading...</h1>
  } 

  if(error){
    return <h1>Error: {error}</h1>
  }

  if(!filterProduct){
    return <h1>Product Not Found</h1>
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Left column */}
        <div className="flex flex-col-reverse">
          <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
              {filterProduct.images.map((image, index) => (
                <button
                  key={index}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  <span className="sr-only">Product image {index + 1}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <img src={image} alt="" className="w-full h-full object-center object-cover" width={96} height={96} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={filterProduct.thumbnail}
              alt={filterProduct.title}
              className="w-full h-full object-center object-cover sm:rounded-lg"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{filterProduct.title}</h1>
          <h2 className="sr-only">Product information</h2>
          <p className="text-sm text-gray-500 mt-2">{filterProduct.brand}</p>

          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    key={rating}
                    className={`${
                      filterProduct.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                    } h-5 w-5 flex-shrink-0`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{filterProduct.rating} out of 5 stars</p>
              <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {filterProduct.reviews.length} reviews
              </a>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900">{filterProduct.description}</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <p className="text-lg font-medium text-gray-900">
                ${filterProduct.discountedPrice}
              </p>
              <p className="ml-2 text-sm line-through font-medium text-gray-500">
                ${filterProduct.price.toFixed(2)}
              </p>
              <p className="ml-2 text-sm font-medium text-green-500">
                {filterProduct.discountPercentage.toFixed(2)}% off
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{filterProduct.availabilityStatus}</p>
          </div>

          <div className="mt-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-700">SKU: {filterProduct.sku}</p>
              <p className="text-sm text-gray-700">Category: {filterProduct.category}</p>
              <p className="text-sm text-gray-700">Tags: {filterProduct.tags.join(', ')}</p>
              <p className="text-sm text-gray-700">Dimensions: {filterProduct.dimensions.width}W x {filterProduct.dimensions.height}H x {filterProduct.dimensions.depth}D cm</p>
              <p className="text-sm text-gray-700">Minimum Order Quantity: {filterProduct.minimumOrderQuantity}</p>
              <p className="text-sm text-gray-700">{filterProduct.returnPolicy}</p>
              <p className="text-sm text-gray-700">{filterProduct.shippingInformation}</p>
              <p className="text-sm text-gray-700">{filterProduct.warrantyInformation}</p>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 lg:mt-24" id="reviews">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customer Reviews</h2>
        <div className="mt-6 space-y-10">
          {filterProduct.reviews.map((review, index) => (
            <div key={index} className="flex flex-col sm:flex-row">
              <div className="order-2 sm:order-1 sm:ml-16">
                <h3 className="font-medium text-gray-900">{review.reviewerName}</h3>
                <p className="sr-only">{review.rating} out of 5 stars</p>
                <p className="mt-1 text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
                <div className="mt-3 space-y-6 text-sm text-gray-600">
                  <p>{review.comment}</p>
                </div>
              </div>
              <div className="order-1 sm:order-2 flex items-center sm:flex-col sm:items-start">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                      } h-5 w-5 flex-shrink-0`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
