const reportDataResultsWrapperHtml = `<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:24px 24px 8px 24px;text-align:center;">
            {{ $report_data_result_lines }}
            <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:552px;" width="552" bgcolor="#F5F6FC" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
</div>`;

const reportDataResultLineWithSublineAndUpperTextHtml = `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:552px;" width="552" bgcolor="#F5F6FC" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#F5F6FC;background-color:#F5F6FC;margin:0px auto;max-width:552px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F5F6FC;background-color:#F5F6FC;width:100%;">
        <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:18px 0px 0px 19px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:533px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                    <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:106px;" ><![endif]-->
                    <div class="mj-column-per-20 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:20%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                            <tr>
                                <td style="vertical-align:middle;padding:18px 20px 17px 19px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                        <tbody>
                                        <tr>
                                            <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                    <tr>
                                                        <td style="width:67px;">
                                                            <img height="72" src="{{ $image }}" style="border:0;display:block;outline:none;text-decoration:none;height:72px;width:100%;font-size:13px;" width="67" />
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:426px;" ><![endif]-->
                    <div class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:80%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                            <tr>
                                <td style="vertical-align:middle;padding:0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                        <tbody>
                                        @if(isset(upper_text))
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:0px 0px 0px 16px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:10px;font-weight:400;letter-spacing:0.2em;line-height:12px;text-align:left;text-transform:uppercase;color:#5F616A;">{{ $upper_text }}</div>
                                                </td>
                                            </tr>
                                        @endif
                                        <tr>
                                            <td style="font-size:0px;padding:0;word-break:break-word;">
                                                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:426.4px;" width="426" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                                <div style="margin:0px auto;max-width:426.4px;">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                        <tbody>
                                                        <tr>
                                                            <td style="direction:ltr;font-size:0px;padding:0;text-align:justify;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:426px;" ><![endif]-->
                                                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                                                    <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style="vertical-align:middle;padding-right:4px;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td align="left" style="font-size:0px;padding:4px 0 0 16px;word-break:break-word;">
                                                                                                <div style="font-family:Poppins;font-size:24px;font-weight:700;line-height:36px;text-align:left;color:#6613D0;">{{ $report_number }}</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style="vertical-align:middle;padding-right:4px;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td align="left" style="font-size:0px;padding:4px 0 0 0;word-break:break-word;">
                                                                                                <div style="font-family:Poppins;font-size:18px;line-height:24px;text-align:left;color:#5F616A;"> {{ $report_label }}</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    @if(isset(period_compare_number))
                                                                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:{{ $period_compare_pill_background_color }};border-radius:9999px;vertical-align:middle;" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td align="left" style="font-size:0px;padding:1.5px 8px 1.5px 8px;word-break:break-word;">
                                                                                    <div style="font-family:Poppins;font-size:12px;letter-spacing:0.02em;line-height:15px;text-align:left;color:{{ $period_compare_color }};">
                                                                                        {{ $period_compare_number }}{{ $period_compare_measure_unit }}
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                                                    @endif
                                                                </div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!--[if mso | IE]></td></tr></table><![endif]-->
                                            </td>
                                        </tr>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:4px 0 0 16px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:12px;letter-spacing:0.02em;line-height:15px;text-align:left;color:#5F616A;">
                                                        {{ $subline_text_preffix }}
                                                        <b>
                                                            {{ $subline_text_number }} {{ $subline_text_suffix }}
                                                        </b>
                                                        <span style="color:{{ $subline_text_period_compare_color }};">
                                                            <b>
                                                                {{ $subline_text_period_compare_number }}{{ $subline_text_period_compare_measure_unit }}
                                                            </b>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
</div>`;

const reportDataResultLineHtml = `<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:552px;" width="552" bgcolor="#F5F6FC" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="background:#F5F6FC;background-color:#F5F6FC;margin:0px auto;max-width:552px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F5F6FC;background-color:#F5F6FC;width:100%;">
        <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:18px 0px 0px 19px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:533px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                    <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:106px;" ><![endif]-->
                    <div class="mj-column-per-20 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:20%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                            <tr>
                                <td style="vertical-align:middle;padding:18px 20px 17px 19px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                        <tbody>
                                        <tr>
                                            <td align="left" style="font-size:0px;padding:0px;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                    <tbody>
                                                    <tr>
                                                        <td style="width:67px;">
                                                            <img height="72" src="{{ $image }}" style="border:0;display:block;outline:none;text-decoration:none;height:72px;width:100%;font-size:13px;" width="67" />
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:426px;" ><![endif]-->
                    <div class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:80%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                            <tr>
                                <td style="vertical-align:middle;padding:0px;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                        <tbody>
                                        <tr>
                                            <td style="font-size:0px;padding:0;word-break:break-word;">
                                                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:426.4px;" width="426" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                                <div style="margin:0px auto;max-width:426.4px;">
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                                        <tbody>
                                                        <tr>
                                                            <td style="direction:ltr;font-size:0px;padding:0;text-align:justify;">
                                                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:426px;" ><![endif]-->
                                                                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                                                    <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style="vertical-align:middle;padding-right:4px;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td align="left" style="font-size:0px;padding:4px 0 0 16px;word-break:break-word;">
                                                                                                <div style="font-family:Poppins;font-size:24px;font-weight:700;line-height:36px;text-align:left;color:#6613D0;">{{ $report_number }}</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style="vertical-align:middle;padding-right:4px;">
                                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                                                                        <tbody>
                                                                                        <tr>
                                                                                            <td align="left" style="font-size:0px;padding:4px 0 0 0;word-break:break-word;">
                                                                                                <div style="font-family:Poppins;font-size:18px;line-height:24px;text-align:left;color:#5F616A;"> {{ $report_label }}</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    @if(isset(period_compare_number))
                                                                    <!--[if mso | IE]></td><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                                                                    <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:{{ $period_compare_pill_background_color }};border-radius:9999px;vertical-align:middle;" width="100%">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td align="left" style="font-size:0px;padding:1.5px 8px 1.5px 8px;word-break:break-word;">
                                                                                    <div style="font-family:Poppins;font-size:12px;letter-spacing:0.02em;line-height:15px;text-align:left;color:{{ $period_compare_color }};">
                                                                                        {{ $period_compare_number }}{{ $period_compare_measure_unit }}
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                                                    @endif
                                                                </div>
                                                                <!--[if mso | IE]></td></tr></table><![endif]-->
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
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
</div>`;