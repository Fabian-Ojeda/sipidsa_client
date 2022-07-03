import React, {useState} from "react";
import { Controller, useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import {BsCalendarEvent} from "react-icons/bs";
import ContainerTableAlerSan from "./ContainerTableAlerSan";

const ShowFormatAlerSan = () => {
    const [visibleTable, setVisibleTable] = useState('none')
    const {register, formState: {errors}, handleSubmit,control } = useForm()
    const onSubmit = (data) => {
        alert("Nos llega por ahora desde alertas sanitarias: "+data.initDate+" "+data.endDate)
        setVisibleTable('block')
    }
    return(
        <div>
            <div className={'mt-4'}>
                <h4>Seleccione el intervalo de tiempo</h4>
                <form className={'col mt-3'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'row'}>
                        <div className={'form-group col'}>
                            <div className="groupCalendarTH my-2 mx-5">
                                <Controller
                                    control={control}
                                    name={'initDate'}
                                    defaultValue={null}
                                    rules={{required:true}}
                                    render={({ field }) => (
                                        <DatePicker
                                            className={'form-control'}
                                            placeholderText={"Fecha Inicial"}
                                            locale={"es"}
                                            onChange={(date) => field.onChange(date)}
                                            selected={field.value}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    )}
                                />
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
                                </div>
                            </div>
                            <span className="text-danger text-small d-block mb-2 mx-5">
                                {errors.initDate?.type === 'required' && "Por favor seleccione la fecha inicial"}
                            </span>
                        </div>
                        <div className={'form-group col'}>
                            <div className="groupCalendarTH my-2 mx-5">
                                <Controller
                                    control={control}
                                    name={'endDate'}
                                    defaultValue={null}
                                    rules={{required:true}}
                                    render={({ field }) => (
                                        <DatePicker
                                            className={'form-control '}
                                            placeholderText={"Fecha Final"}
                                            locale={"es"}
                                            onChange={(date) => field.onChange(date)}
                                            selected={field.value}
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    )}
                                />
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><h7><BsCalendarEvent/></h7></span>
                                </div>
                            </div>
                            <span className="text-danger text-small d-block mb-2 mx-5">
                                {errors.endDate?.type === 'required' && "Por favor seleccione la fecha final"}
                            </span>
                        </div>
                        <div className={'row mt-4 centerHorizontalELements'}>
                            <button className={'btn btn-success'} style={{width:'30%'}}>Mostrar</button>
                        </div>
                    </div>
                </form>
                <div>
                    <ContainerTableAlerSan
                        visible={visibleTable}/>
                </div>
            </div>
        </div>
    )

}

export default ShowFormatAlerSan