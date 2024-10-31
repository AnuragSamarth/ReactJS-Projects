export default function FinancialInfoForm({ register, errors }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-gray-800 border-b pb-2">
        Financial Information
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            Salary
          </label>
          <input
            type="number"
            id="salary"
            {...register("salary")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.salary?.message && (
            <p className="text-red-500 font-sans">{errors.salary?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="bank"
            className="block text-sm font-medium text-gray-700"
          >
            Bank
          </label>
          <input
            type="text"
            id="bank"
            {...register("bank")}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.bank?.message && (
            <p className="text-red-500 font-sans">{errors.bank?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
