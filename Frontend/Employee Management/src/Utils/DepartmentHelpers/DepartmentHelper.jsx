export const colums = [
  {
    name: "S No",
    selector: () => row.sno,
  },
  {
    name: "Department Name",
    selector: () => row.dep_name,
  },
  {
    name: "Action",
    selector: () => row.action,
  },
];

export const DepartmentButtons = () => {
  return (
    <>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
};
