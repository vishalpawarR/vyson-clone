/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <>
      <a
        className="bg-[#1E1515] text-white py-3 px-6 rounded-3xl"
        href=""
      >
        {children}
      </a>
    </>
  )
}

export default Button
