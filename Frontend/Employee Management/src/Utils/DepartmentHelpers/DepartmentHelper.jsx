export const colums = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = () => {
  return (
    <>
      <div className="flex space-x-3">
        <button className="p-3 py-1 bg-teal-600 text-white rounded-md">Edit</button>
        <button className="p-3 py-1 bg-red-600 text-white rounded-md">Delete</button>
      </div>
    </>
  );
};
