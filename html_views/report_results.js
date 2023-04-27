const reportResultsWrapperHtml = `<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
<div style="margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:0;text-align:justify;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody>
                        <tr>
                            <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:6.5px;word-break:break-word;">
                                <div style="font-family:Poppins;font-size:14px;line-height:18px;text-align:left;color:#34353F;">Principais clientes</div>
                            </td>
                        </tr>
                        {{ $report_results }}
                        </tbody>
                    </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
`;

const reportResultRowHtml = `<tr>
    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;padding-bottom:6.5px;word-break:break-word;">
        <div style="font-family:Poppins;font-size:14px;font-weight:700;line-height:18px;text-align:left;text-transform:uppercase;color:{{ $report_result_title_color }};">
            {{ $report_result_title }}
        </div>
    </td>
</tr>`;

const reportResultRowSeparator = `<tr>
    <td align="center" style="font-size:0px;padding:36px 24px 25px 24px;word-break:break-word;">
        <p style="border-top:solid 1px #E0E1EB;font-size:1px;margin:0px auto;width:100%;"></p>
        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #E0E1EB;font-size:1px;margin:0px auto;width:552px;" role="presentation" width="552px" ><tr><td style="height:0;line-height:0;"> &nbsp;
        </td></tr></table><![endif]-->
    </td>
</tr>`;

const reportResultLineHtml = `<tr>
<td style="font-size:0px;padding:0 0 0 0;word-break:break-word;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 24px;text-align:justify;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="default-text-format-outlook" style="width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix default-text-format" style="padding:0 0 0 24px;font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                        <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                        <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                <tr>
                                    <td style="vertical-align:middle;padding:0 4px 0 22px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                            <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;line-height:24px;text-align:left;color:#5F616A;">
                                                        {{ $report_result_prefix_text }}
                                                    </div>
                                                </td>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;font-weight:700;line-height:23px;text-align:left;color:{{ $report_result_text_color }};">
                                                        {{ $report_result_colored_text }}
                                                    </div>
                                                </td>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;line-height:24px;text-align:left;color:#5F616A;">
                                                        {{ $report_result_suffix_text }}
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
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>`;

const reportResultLinePrefixAndColoredHtml = `<tr>
<td style="font-size:0px;padding:0 0 0 0;word-break:break-word;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 24px;text-align:justify;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="default-text-format-outlook" style="width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix default-text-format" style="padding:0 0 0 24px;font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                        <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                        <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                <tr>
                                    <td style="vertical-align:middle;padding:0 4px 0 22px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                            <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;line-height:24px;text-align:left;color:#5F616A;">
                                                        {{ $report_result_prefix_text }}
                                                    </div>
                                                </td>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;font-weight:700;line-height:23px;text-align:left;color:{{ $report_result_text_color }};">
                                                        {{ $report_result_colored_text }}
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
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>`;

const reportResultLineColoredAndSuffixHtml = `<tr>
<td style="font-size:0px;padding:0 0 0 0;word-break:break-word;">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
            <tr>
                <td style="direction:ltr;font-size:0px;padding:0 0 0 24px;text-align:justify;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="default-text-format-outlook" style="width:600px;" ><![endif]-->
                    <div class="mj-column-per-100 mj-outlook-group-fix default-text-format" style="padding:0 0 0 24px;font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                        <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:middle;width:NaNNaNpx;" ><![endif]-->
                        <div class="mj-column-px-NaN mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:NaN%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                <tr>
                                    <td style="vertical-align:middle;padding:0 4px 0 22px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                                            <tbody>
                                            <tr>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                    <div style="font-family:Poppins;font-size:14px;font-weight:700;line-height:23px;text-align:left;color:{{ $report_result_text_color }};">
                                                        {{ $report_result_colored_text }}
                                                    </div>
                                                </td>
                                                <td align="left" style="font-size:0px;padding:0 0 0 4px;word-break:break-word;">
                                                <div style="font-family:Poppins;font-size:14px;line-height:24px;text-align:left;color:#5F616A;">
                                                    {{ $report_result_suffix_text }}
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
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
</td>
</tr>`;