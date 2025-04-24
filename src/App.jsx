import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const App = () => {
  const reportRefs = useRef([]);

  const handleDownload = (index) => {
    const element = reportRefs.current[index];
    if (element) {
      html2pdf()
        .set({
          margin: 0.5,
          filename: `${students[index].name.replace(/\s+/g, "_")}_Report.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: {
            unit: "in",
            format: [18, 13],
            orientation: "portrait",
          },
        })
        .from(element)
        .save();
    }
  };

  const students = [
    {
      name: "JIGNSHUV MEENA",
      mother: "REKHA MEENA",
      father: "DINESH CHANDRA MEENA",
      dob: "8/20/2011",
      scholarNo: "1",
      rollNo: "1",
      class: "I",
      unitTest: [
        { subject: "ENGLISH", marks: [28, 15, 25, 49, 56, 173] },
        { subject: "HINDI", marks: [27, 24, 18, 44, 57, 170] },
        { subject: "MATHS", marks: [27, 25, 21, 42, 25, 140] },
      ],
      totalMarks: 200,
      marksObtained: 150,
      percentage: "85.5",
      division: "First",
      attendance: "329",
      result: "Pass",
      activities: [
        ["Drawing", "A"],
        ["Physical Ed.", "A"],
      ],
      remark: "",
      promotion: "",
      resultDate: "",
    },
    {
      name: "TANVI MEGHWAL",
      mother: "SONU MEGHWAL",
      father: "SURESH MEGHWAL",
      dob: "12/2/2011",
      scholarNo: "2",
      rollNo: "2",
      class: "I",
      unitTest: [
        { subject: "ENGLISH", marks: [25, 27, 45, 55, 18, 170] },
        { subject: "HINDI", marks: [26, 28, 45, 55, 16, 140] },
        { subject: "MATHS", marks: [27, 24, 45, 55, 16, 130] },
      ],
      totalMarks: 200,
      marksObtained: 170,
      percentage: "85",
      division: "First",
      attendance: "85",
      result: "Pass",
      activities: [
        ["Drawing", "A"],
        ["Physical Ed.", "A"],
      ],
      remark: "",
      promotion: "",
      resultDate: "",
    },
    {
      name: "MANISH TELI",
      mother: "DHANVAR KUMARI",
      father: "DURGA SUWAKA TELI",
      dob: "7/11/2011",
      scholarNo: "3",
      rollNo: "3",
      class: "I",
      unitTest: [
        { subject: "ENGLISH", marks: [28, 28, 46, 50, 18, 170] },
        { subject: "HINDI", marks: [25, 26, 46, 50, 18, 160] },
        { subject: "MATHS", marks: [26, 26, 46, 50, 15, 150] },
      ],
      totalMarks: 200,
      marksObtained: 160,
      percentage: "80",
      division: "First",
      attendance: "80",
      result: "Pass",
      activities: [
        ["Drawing", "A"],
        ["Physical Ed.", "A"],
      ],
      remark: "",
      promotion: "",
      resultDate: "",
    },
    {
      name: "VICOM DAS MAHAJAT",
      mother: "SUDHIRDHA MAHAJAT",
      father: "NANDESHWAR DAS",
      dob: "1/14/2012",
      scholarNo: "4",
      rollNo: "4",
      class: "I",
      unitTest: [
        { subject: "ENGLISH", marks: [21, 27, 15, 66, 20, 129] },
        { subject: "HINDI", marks: [22, 25, 15, 66, 20, 128] },
        { subject: "MATHS", marks: [20, 20, 15, 66, 15, 125] },
      ],
      totalMarks: 200,
      marksObtained: 172,
      percentage: "61.5",
      division: "Second",
      attendance: "61.5",
      result: "Pass",
      activities: [
        ["Drawing", "A"],
        ["Physical Ed.", "A"],
      ],
      remark: "",
      promotion: "",
      resultDate: "",
    },
    {
      name: "SURAJPAL SINGH SISODIYA",
      mother: "SHIL SISODIYA",
      father: "BALWANT SINGH SISODIYA",
      dob: "6/25/2011",
      scholarNo: "5",
      rollNo: "5",
      class: "I",
      unitTest: [
        { subject: "ENGLISH", marks: [21, 27, 15, 66, 20, 129] },
        { subject: "HINDI", marks: [22, 25, 15, 66, 20, 128] },
        { subject: "MATHS", marks: [25, 25, 15, 66, 15, 129] },
      ],
      totalMarks: 200,
      marksObtained: 168,
      percentage: "61.5",
      division: "Second",
      attendance: "61.5",
      result: "Pass",
      activities: [
        ["Drawing", "A"],
        ["Physical Ed.", "A"],
      ],
      remark: "",
      promotion: "",
      resultDate: "",
    },
  ];

  return students.map((student, index) => (
    <div key={index} className="space-y-2">
      <div ref={(el) => (reportRefs.current[index] = el)}>
        <ProgressReport studentDetail={student} />
      </div>
      <div className="text-center">
        <button
          onClick={() => handleDownload(index)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download Result as PDF
        </button>
      </div>
    </div>
  ));
};

const ProgressReport = ({ studentDetail }) => {
  return (
    <div className="max-w-fit mx-auto border p-4 text-xs font-serif">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-2 space-y-1">
        <h1 className="text-2xl font-bold uppercase ">
          Adarsh vidya niketan dariba
        </h1>
        <p className="text-[14px]">
          Sansera Road, Infront of Swarnkar Restaurant, Dariba,
        </p>
        <p className="text-[14px]">
          Teh. Railmagra, Dist. Rajsamand, PIN - 313211
        </p>
        {/* <p className="text-[14px]">
          Email: gayatrisansthan.dariba@gmail.com | Contact No.: 8233804104,
          9772240138
        </p> */}
        <p className="text-[14px]">Affiliation No.: 142/92-93</p>
        <h2 className="text-[14px] font-bold mt-1 underline">
          Annual Progress Report
        </h2>
        <p className="text-[14px]">Session - 2024-25</p>
      </div>

      {/* Student Info */}
      <div className="grid grid-cols-3 gap-2 mb-2 pt-2 ">
        <div className="col-span-2 space-y-1 uppercase ">
          <p className="text-[13px]">
            <strong className="text-[14px]">Name of Student:</strong>{" "}
            {studentDetail?.name}
          </p>
          {/* <p className="text-[13px]">
            <strong className="text-[14px]">Mother's Name:</strong>{" "}
            {studentDetail?.mother}
          </p> */}
          <p className="text-[13px]">
            <strong className="text-[14px]">Father's Name:</strong>
            {studentDetail?.father}
          </p>
          <p className="text-[13px]">
            <strong className="text-[14px]">Class:</strong>{" "}
            {studentDetail?.class}
          </p>
        </div>
        <div className="space-y-1 text-right uppercase flex flex-col items-start">
          <p className="font-sans text-[14px]">
            <strong className="text-[14px] font-serif">Date of Birth:</strong>{" "}
            {studentDetail?.dob}
          </p>
          <p className="font-sans text-[14px]">
            <strong className="text-[14px] font-serif">Scholar No.:</strong>{" "}
            {studentDetail?.scholarNo}
          </p>
          <p className="font-sans text-[14px]">
            <strong className="text-[14px] font-serif">Roll No.:</strong>{" "}
            {studentDetail?.rollNo}
          </p>
          {/* <div className="flex justify-end mt-1">
            <img
              src="https://via.placeholder.com/80"
              alt="Student"
              className="border w-20 h-20"
            />
          </div> */}
        </div>
      </div>

      {/* Main Table */}
      <table className="w-full border border-black mb-4 text-center uppercase">
        <thead>
          <tr className="bg-gray-100">
            <th rowSpan={2} className="border border-black p-2 text-[14px]">
              Subject
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              FA-I
              <br />
              Max/30
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              FA-II
              <br />
              Max/30
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              FA-III
              <br />
              Max/30
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              SA-I
              <br />
              Max/50
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              SA-II
              <br />
              Max/60
            </th>
            <th colSpan={1} className="border border-black p-2 text-[14px]">
              TOTAL MARKS
              <br />
              Max/200
            </th>
          </tr>
        </thead>
        <tbody>
          {studentDetail?.unitTest?.map((item, i) => (
            <tr className="" key={i}>
              <td className="border border-black p-2 text-[14px]">
                {item.subject}
              </td>
              {item.marks.map((mark, j) => (
                <td
                  key={j}
                  className="border border-black font-sans p-2 text-[14px]"
                >
                  {mark}
                </td>
              ))}
            </tr>
          ))}
          <tr className="font-semibold">
            <td className="border border-black text-[14px] p-2">Total</td>
            <td className="border border-black p-2">—</td>
            <td className="border border-black p-2">—</td>
            <td className="border border-black p-2">—</td>
            <td className="border border-black p-2">—</td>
            <td className="border border-black p-2">—</td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.totalMarks}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Computer & GK */}
      <table className="w-full border border-black text-center mb-4">
        <thead>
          <tr className="bg-gray-100 uppercase">
            {/* <th className="border border-black p-2 text-[13px]">
              Computer
              <br />
              Max/40
            </th>
            <th className="border border-black p-2 text-[13px]">
              G.K.
              <br />
              Max/40
            </th> */}
            <th className="border border-black p-2 text-[13px]">Total Marks</th>
            <th className="border border-black p-2 text-[13px]">
              Marks Obtained
            </th>
            <th className="border border-black p-2 text-[13px]">Percentage</th>
            <th className="border border-black p-2 text-[13px]">Grade</th>
            <th className="border border-black p-2 text-[13px]">Rank</th>
            <th className="border border-black p-2 text-[13px]">Attendance</th>
            <th className="border border-black p-2 text-[13px]">Division</th>
            <th className="border border-black p-2 text-[13px]">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.computer}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.gk}
            </td> */}
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.totalMarks}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.marksObtained}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.percentage}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.grade}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.rank}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.attendance}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.division}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.result}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Grading Scale */}
      <p className="mb-2 ">
        <div className="uppercase text-[12px] font-sans mb-2 font-bold">
          3-Point Grading Scale for Scholastic Areas:
        </div>

        <div className="mb-4">
          <table className="w-full border border-black text-center mb-2">
            <thead>
              <tr className="bg-gray-100 uppercase">
                <th className="border border-black text-[14px] p-2">A1</th>
                <th className="border border-black text-[14px] p-2">A2</th>
                <th className="border border-black text-[14px] p-2">B1</th>
                <th className="border border-black text-[14px] p-2">B2</th>
                <th className="border border-black text-[14px] p-2">C1</th>
                <th className="border border-black text-[14px] p-2">C2</th>
                <th className="border border-black text-[14px] p-2">D</th>
                <th className="border border-black text-[14px] p-2">E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black text-[14px] p-2 font-sans">
                  91-100
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  81-90
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  71-80
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  61-70
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  51-60
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  41-50
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  33-40
                </td>
                <td className="border border-black text-[14px] p-2 font-sans">
                  32 & above
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </p>

      {/* Other Activities */}
      <div className="mb-4">
        <table className="w-full border border-black text-center mb-2">
          <thead>
            <tr className="bg-gray-100 uppercase">
              <th className="border border-black text-[14px] p-2">
                Activities
              </th>
              <th className="border border-black text-[14px] p-2">Quarterly</th>
              <th className="border border-black text-[14px] p-2">SA-I</th>
              <th className="border border-black text-[14px] p-2">SA-II</th>
            </tr>
          </thead>
          <tbody>
            {studentDetail?.activities?.map(([activity, q, h, a], i) => (
              <tr key={i}>
                <td className="border border-black text-[14px] p-2 uppercase">
                  {activity}
                </td>
                <td className="border border-black text-[14px] p-2">{q}</td>
                <td className="border border-black text-[14px] p-2">{h}</td>
                <td className="border border-black text-[14px] p-2">{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Teacher's Remark */}
      <div className="mb-2 uppercase text-nowrap">
        <p className="text-[14px]">
          <strong className="text-[16px]">Teacher's Remark:</strong>{" "}
          {studentDetail?.remark}
        </p>
      </div>

      {/* Promotion */}
      <p className="font-semibold mb-2 text-[16px]">PROMOTED TO II</p>

      <div className="w-full mx-auto mt-6">
        <table className="w-full border border-black text-center text-sm">
          <tbody>
            <tr>
              <td className="border border-black w-1/4">
                <p className="font-semibold font-sans">
                  {studentDetail?.resultDate}
                </p>
                <p className="text-gray-700 mt-1 border-t border-black pt-4">
                  RESULT DATE
                </p>
              </td>
              <td className="border border-black py-2 w-1/4">
                <p className="font-semibold h-6 py-2 pb-2"></p>
                <p className="text-gray-700 mt-1 border-t border-black">
                  SIGNATURE OF
                  <br />
                  CLASS TEACHER
                </p>
              </td>
              <td className="border border-black  w-1/4">
                <p className="font-semibold h-6"></p>
                <p className="text-gray-700 mt-1 border-t border-black">
                  SIGNATURE OF
                  <br />
                  EXAM INCHARGE
                </p>
              </td>
              <td className="border border-black  w-1/4">
                <p className="font-semibold h-6"></p>
                <p className="text-gray-700 mt-1 border-t border-black">
                  PRINCIPAL SIGNATURE
                  <br />
                  HEADMISTRESS
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
