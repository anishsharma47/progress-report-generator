import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import LOGO from "./assets/logo.png";
import { gradeRemarks, students } from "./utils/staticData";

const App = () => {
  const reportRefs = useRef([]);
  const handleDownload = (index) => {
    const element = reportRefs.current[index];
    if (element) {
      const opt = {
        margin: 0.5,
        filename: `${students[index].name.replace(/\s+/g, "_")}_Report.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: {
          unit: "in",
          format: [11,9.5],
          orientation: "portrait",
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };
  
      html2pdf().set(opt).from(element).save();
    }
  };
  
  

  return students.map((student, index) => {
    const numOfMarks = student?.unitTest?.[index]?.marks?.length - 1;

    const verticalSums = Array.from({ length: 5 }, (_, i) =>
      student?.unitTest?.reduce((sum, subj) => sum + subj?.marks[i], 0)
    );

    console.log('sdet>>>',verticalSums)
    const lastColumnSum = student?.unitTest?.reduce((sum, subject) => {
      const lastMark = subject?.marks[subject?.marks?.length - 1];
      return sum + lastMark;
    }, 0);

    return (
      <div key={index} >
        <div style={{ pageBreakInside: 'avoid' }} ref={(el) => (reportRefs.current[index] = el)}>
          <ProgressReport
            studentDetail={student}
            verticalSums={verticalSums}
            lastColumnSum={lastColumnSum}
          />
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
    );
  });
};

const ProgressReport = ({ studentDetail, verticalSums, lastColumnSum }) => {
  return (
    <div className="max-w-fit min-h-full mx-auto border p-4 text-xs font-serif">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-2 space-y-1 relative">
        <h1 className="text-2xl font-bold uppercase ">
          Adarsh vidya niketan dariba
        </h1>
        <p className="text-[14px]">Near by Sanwaliya Seth Mandir</p>
        {/* <p className="text-[14px]">
          Teh. Railmagra, Dist. Rajsamand, PIN - 313211
        </p> */}
        {/* <p className="text-[14px]">
          Email: gayatrisansthan.dariba@gmail.com | Contact No.: 8233804104,
          9772240138
        </p> */}
        {/* <p className="text-[14px]">Affiliation No.: 142/92-93</p> */}
        <h2 className="text-[14px] font-bold mt-1 underline">
          Annual Progress Report
        </h2>
        <p className="text-[14px]">Session - 2024-25</p>

        <img
          className="absolute left-0  top-[-10px] w-[100px]"
          src={LOGO}
          alt="logo"
        />
      </div>

      {/* Student Info */}
      <div className="grid grid-cols-3 gap-2 mb-2 pt-2 ">
        <div className="col-span-2 space-y-1 uppercase ">
          <p className="text-[13px]">
            <strong className="text-[14px]">Name of Student:</strong>{" "}
            {studentDetail?.name}
          </p>
          <p className="text-[13px]">
            <strong className="text-[14px]">Mother's Name:</strong>{" "}
            {studentDetail?.mother}
          </p>
          <p className="text-[13px]">
            <strong className="text-[14px]">Father's Name:</strong>
            {studentDetail?.father}
          </p>
          <p className="text-[13px]">
            <strong className="text-[14px]">Class:</strong>{" "}
            {'LKG'}
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
            {verticalSums?.map((item, index) => (
              <td className="border border-black p-2 font-sans text-[14px]">
                {item}
              </td>
            ))}

            <td className="border border-black p-2 font-sans text-[16px]">
              {lastColumnSum}
            </td>
          </tr>
        </tbody>
      </table>

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
            {/* <th className="border border-black p-2 text-[13px]">Rank</th> */}
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
              600
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {lastColumnSum}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {(lastColumnSum/600*100).toFixed(1)}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.grade}
            </td>
            {/* <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.rank}
            </td> */}
            <td className="border border-black p-2 font-sans text-[14px]">
              {studentDetail?.attendance}
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
            First
            </td>
            <td className="border border-black p-2 font-sans text-[14px]">
            Pass
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
                <th className="border border-black text-[14px] p-2">A+</th>
                <th className="border border-black text-[14px] p-2">A</th>
                <th className="border border-black text-[14px] p-2">B+</th>
                <th className="border border-black text-[14px] p-2">B</th>
                <th className="border border-black text-[14px] p-2">C+</th>
                <th className="border border-black text-[14px] p-2">C</th>
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
              <th className="border border-black text-[14px] p-2">Annual</th>
              {/* <th className="border border-black text-[14px] p-2">SA-I</th>
              <th className="border border-black text-[14px] p-2">SA-II</th> */}
            </tr>
          </thead>
          <tbody>
            {studentDetail?.activities?.map(([activity, q, h, a], i) => (
              <tr key={i}>
                <td className="border border-black text-[14px] p-2 uppercase">
                  {activity}
                </td>
                <td className="border border-black text-[14px] p-2">{q}</td>
                {/* <td className="border border-black text-[14px] p-2">{h}</td>
                <td className="border border-black text-[14px] p-2">{a}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Teacher's Remark */}
      <div className="mb-2 uppercase text-nowrap">
        <p className="text-[14px]">
          <strong className="text-[16px]">Teacher's Remark:</strong>{" "}
          {gradeRemarks[studentDetail.grade]}  
        </p>
      </div>

      {/* Promotion */}
      <p className="font-semibold mb-2 text-[16px]">PROMOTED TO UKG</p>

      <div className="w-full mx-auto mt-6">
        <table className="w-full border border-black text-center text-sm">
          <tbody>
            <tr>
              <td className="border border-black w-1/4">
                <p className="font-semibold font-sans">
                  {studentDetail?.resultDate}
                </p>
                <p className="text-gray-700 mt-2 border-t border-black grid place-content-center">
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
