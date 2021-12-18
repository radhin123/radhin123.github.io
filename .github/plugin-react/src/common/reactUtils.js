import React, { useEffect, useRef } from 'react'
import Link from '@material-ui/core/Link'
import useFetch from 'use-http'
import { convert2KMBTString } from '../common/utils'

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}


export function colorPosGreenNegRedField(field, headerName, width, hide){
  return {
    field: field,
    headerName: headerName,
    width: width,
    type: 'number',
    renderCell: (params) => (
      params.value === "-" || params.value === "Infinity" || params.value === 'NaN' ?
        <span>-</span> :
        <span style={{ fontWeight: 500, color: Math.sign(parseFloat(params.value)) === 1 ? 'green' : Math.sign(parseFloat(params.value)) === -1 ? 'red' : '' }}>{Math.sign(parseFloat(params.value)) === 1 ? '+' : ''}{params.value}</span>
    ),
    hide: hide
  }
}

export function colorPosGreenNegRedPercentField(field, headerName, width, hide){
  return {
    field: field,
    headerName: headerName,
    width: width,
    type: 'number',
    renderCell: (params) => (
      params.value === "-" || params.value === -Number.MAX_VALUE || params.value === "Infinity" || params.value === 'NaN' ?
        <span>-</span> :
        <span style={{ fontWeight: 500, color: Math.sign(parseFloat(params.value)) === 1 ? 'green' : Math.sign(parseFloat(params.value)) === -1 ? 'red' : '' }}>{Math.sign(parseFloat(params.value)) === 1 ? '+' : ''}{(params.value * 100).toFixed(2) + "%"}</span>
    ),
    hide: hide
  }
}

export function PercentField(field, headerName, width, hide){
  return {
    field: field,
    headerName: headerName,
    width: width,
    type: 'number',
    renderCell: (params) => (
      params.value === "-" || params.value === -Number.MAX_VALUE || params.value === "Infinity" || params.value === 'NaN' ?
        <span>-</span> :
        <span>{(params.value * 100).toFixed(2) + "%"}</span>
    ),
    hide: hide
  }
}

export function KMBTField(field, headerName, width, hide){
  return {
    field: field,
    headerName: headerName,
    width: width,
    type: 'number',
    renderCell: (params) => (
      params.value === "-" || params.value === -Number.MAX_VALUE || params.value === "Infinity" || params.value === 'NaN' ?
        <span>-</span> :
        <span>{convert2KMBTString(params.value, 2)}</span>
    ),
    hide: hide
  }
}

export function IndustryNameField(field, headerName, width, hide) {
  return {
    field: field,
    headerName: headerName,
    width: width,
    renderCell: (params) => (
      params.row['Url'] === '-' ?
        <span>{params.value}</span> :
        <Link href={params.row['Url']} target="_blank" rel="noreferrer noopener">
          <span>{params.value}</span>
        </Link>
    ),
    hide: hide
  }
}

export function SymbolNameField(field, headerName, width, hide) {
  return {
    field: field,
    headerName: headerName,
    width: width,
    renderCell: (params) => (
      <Link href={"https://finviz.com/quote.ashx?t=" + params.value + "&ty=c&p=d&b=1"} target="_blank" rel="noreferrer noopener">
        <span>{params.value}</span>
      </Link>
    ),
    hide: hide
  }
}


export function PureFieldWithValueCheck(field, headerName, width, valueFixed, hide) {
  return {
    field: field,
    headerName: headerName,
    width: width,
    type: 'number',
    renderCell: (params) => (
      params.value === "-" || params.value === -Number.MAX_VALUE || params.value === Number.MAX_VALUE || params.value === null || params.value === undefined || params.value === "Infinity" || params.value === 'NaN' ?
        <span>-</span> :
        <span>{params.value.toFixed(valueFixed)}</span>
    ),
    hide: hide
  }
}


export const GetDataByFetchObj = async (url, fetchObj) => {
  const resp_data = await fetchObj.get(url)
  if (fetchObj.response.ok && resp_data) {
    return resp_data
  }
  else {
    return null
  }
}

export const QueryData = ({ serverUrl, queryDataRef }) => {
  const { get, post, response, error } = useFetch(serverUrl, { cachePolicy: 'no-cache' })

  queryDataRef.current = {
    doGet: async (api) => {
      const resp_data = await get(api)
      if (error) {
        console.error(error)
      }
      return { resp: resp_data, ok: response.ok, err: error }
    },
    doPost: async (api, body) => {
      const resp_data = await post(api, body)
      if (error) {
        console.error(error)
      }
      return { resp: resp_data, ok: response.ok, err: error }
    },
  }

  return <></>
}
