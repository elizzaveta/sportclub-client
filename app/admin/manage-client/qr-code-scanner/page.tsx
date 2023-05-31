'use client'
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import {qrCodeDataType} from "@/types/qrCodeDataType";

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
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) setQrCodeData(JSON.parse(result.getText()) as qrCodeDataType);
                }}
            />
            {/*<p>{JSON.stringify(qrCodeData)}</p>*/}
        </div>
    );
}

