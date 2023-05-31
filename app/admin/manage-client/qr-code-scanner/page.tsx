'use client'
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {qrCodeDataType} from "@/types/qrCodeDataType";
import { QrReader } from 'react-qr-reader';

export default function QrCodeScannerPage() {
    const [qrCodeData, setQrCodeData] = React.useState<qrCodeDataType>();
    const router = useRouter();

    useEffect(()=>{
        // && new Date(qrCodeData.expiresAt) > new Date()
        if(qrCodeData){
            router.push(`/admin/manage-client/edit-client/${qrCodeData.user.id}#visits`)
        }
    }, [qrCodeData])

    return (
        <div className='flex flex-col items-center'>
            <p className='text-3xl font-bold text-sky-600'>QR Code Scanner</p>
            <QrReader
                scanDelay={500}
                onResult={(result, error) => {
                    if (result) setQrCodeData(JSON.parse(result.getText()) as qrCodeDataType);
                }}
                className='w-96 h-96'
                constraints={{ facingMode: 'user' }}
            />
            {/*<p>{JSON.stringify(qrCodeData)}</p>*/}
        </div>
    );
}

