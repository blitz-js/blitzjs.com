const Banner = ({ message }) => (
  <div className="border-b border-opacity-50 border-primary">
    <div className="max-w-7xl mx-auto pt-1 pb-2 md:pt-0 md:pb-3 px-3 sm:px-6 lg:px-8 text-sm text-center">
      <p className="text-white">{message}</p>
    </div>
  </div>
)

export default Banner
