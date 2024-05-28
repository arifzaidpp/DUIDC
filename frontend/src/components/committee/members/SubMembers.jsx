import React from 'react'

const SubMembers = (data) => {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                src={data.data.Img}
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a>{data.data.Name}</a>
              </h3>
              { data.data.position ? <p className="text-blk position">{data.data.position}</p> : null}
              
            </div>
  )
}

export default SubMembers