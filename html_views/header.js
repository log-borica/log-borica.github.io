const headerHtml = `<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:8px;text-align:center;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                            <tbody>
                            <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:24px;word-break:break-word;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                        <tr>
                                            <td style="width:140px;">
                                                <img height="24" src="https://logcomex-majestic.s3.sa-east-1.amazonaws.com/ncm-intel/logcomex_email.png" style="border:0;display:block;outline:none;text-decoration:none;height:24px;width:100%;font-size:13px;" width="140" />
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="font-size:0px;padding:0px 24px;word-break:break-word;">
                                    <p style="border-top:solid 1px #E0E1EB;font-size:1px;margin:0px auto;width:100%;">
                                    </p>
                                    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E0E1EB;font-size:1px;margin:0px auto;width:552px;" role="presentation" width="552px" ><tr><td style="height:0;line-height:0;"> &nbsp;
            </td></tr></table><![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:0px;padding:24px 0px 0px 24px;word-break:break-word;">
                                    <div style="font-family:Poppins;font-size:16px;font-weight:600;line-height:20px;text-align:left;color:#000000;">{{ $report_title }}</div>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:0px;padding:8px 0px 0px 24px;word-break:break-word;">
                                    <div style="font-family:Poppins;font-size:12px;letter-spacing:0.02em;line-height:15px;text-align:left;color:#34353F;"> {{ $recent_period_start }} - {{ $recent_period_end }}</div>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" style="font-size:0px;padding:2px 0px 0px 24px;word-break:break-word;">
                                    <div style="font-family:Poppins;font-size:10px;letter-spacing:0.02em;line-height:15px;text-align:left;color:#5F616A;">{{ $older_period_prefix_text }} {{ $older_period_start }} - {{ $older_period_end }}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>`;