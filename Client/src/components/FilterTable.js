import React, { useMemo } from 'react'
import {useTable,useGlobalFilter,usePagination} from "react-table"
import MOCKDATA from "./MOCK_DATA.json"
import {COLUMNS} from  './coloumns'

import GlobalFilter from './GlobalFilter'







function FilterTable() {
    // Fetch From DataBAse
//   const {data, isLoading, isError} = api.useGetExchangeQuery();
//    console.log(data);
    
    const columns = useMemo(()=> COLUMNS,[])
    const datas = useMemo(()=> MOCKDATA,[])
   const {getTableProps,getTableBodyProps,headerGroups,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,setPageSize,prepareRow,state,setGlobalFilter} =  useTable({
        columns,
        data:datas,
        
    }, useGlobalFilter,usePagination)

   
     const {globalFilter,pageIndex, pageSize} = state
    
  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
     <table className="table  table-bordered     " {...getTableProps()}>
        <thead >
               {headerGroups.map(headerGroup=>(
                <tr {... headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column => (
                            <th scope="col" {...column.getHeaderProps()}>
                               {column.render('Header')}
                           </th>
                        ))
                    }
             
               </tr>  
               ))}
                     
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                page.map((row, index) => {
                    prepareRow(row)
                    return ( 
                        <tr {...row.getRowProps()}>
                        
                        {
                            row.cells.map( cell=>{
                           
                                return  <td {...cell.getCellProps()}>
                               
                                {cell.column.id === "url" ? (
                      <img src={cell.value} alt="" />
                    ) : (
                      cell.render('Cell')
                    )}
                                </td>


                            })
                        }
                
             </tr>)
                })
            }
            
        </tbody>
     </table>
     <div className="">
     <select className=" me-md-2  w-auto mx-auto" aria-label="Default select example" value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
         {
            [10,25,50].map(pageSize=>(
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))
         }
     </select>
     <button type="button" className="btn btn-secondary me-md-2" onClick={()=> previousPage()} disabled={!canPreviousPage}>Prev</button>

       <span>
          page{""}
            <strong className="me-md-2">
                {pageIndex + 1}of{pageOptions.length}
            </strong>
       </span>
     <button type="button" className="btn btn-secondary" onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
     </div>
     </>
  )
}

export default FilterTable
