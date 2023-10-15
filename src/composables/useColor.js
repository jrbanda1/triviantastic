const useColor = () => {
  const colors = [
    'bg-green-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-orange-500',
  ]
  const getColor = (index) => colors[index % colors.length]
  return { getColor }
}

export default useColor
