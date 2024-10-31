export default function PersonalInfoForm({ register, errors }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-800 border-b pb-2">
        Personal Info
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.fullName?.message && (
            <p className="text-red-500 font-sans">{errors.fullName?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email?.message && (
            <p className="text-red-500 font-sans">{errors.email?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
