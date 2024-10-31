export default function ContactInfoForm({ register, errors }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-800 border-b pb-2">
        Contact Information
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.phone?.message && (
            <p className="text-red-500 font-sans">{errors.phone?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.city?.message && (
            <p className="text-red-500 font-sans">{errors.city?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
