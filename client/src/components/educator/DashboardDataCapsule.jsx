const DashboardDataCapsule = ({imageUrl, data, title}) => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-md border border-blue-500 shadow">
      <img src={imageUrl} alt="img"/>
      <div className="">
        <p className="text-2xl font-medium text-gray-600">{data}</p>
        <p className="font-medium text-gray-500">{title}</p>
      </div>
    </div>
  )
}

export default DashboardDataCapsule