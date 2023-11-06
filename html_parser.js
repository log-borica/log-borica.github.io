
const parseJsonToHtml = (alertPayload) => {
    parsed_html = parseAlertsHeader(alertPayload);
    parsed_html += parseAlertsReportDataResults(alertPayload);
    parsed_html += parseAlertsReportResults(alertPayload.report_results);
    parsed_html += parseFooter(alertPayload);

    return parsed_html;
}

const parseAlertsHeader = (headerParams) => {
    let processedHtmlHeader = headerHtml;
    
    Object.keys(headerParams)
        .forEach((key) => {
            if (key.includes('period') && !key.includes('text')) {
                headerParams[key] = parseDateStringToFormatedDateString(headerParams[key]);
            }

            processedHtmlHeader = processedHtmlHeader.replace(`{{ $${key} }}`, headerParams[key]);
        })

    return processedHtmlHeader;
}

const parseAlertsReportDataResults = (alertPayload) => {
    const processedReportDataResultLines = [];

    alertPayload.report_data_results.forEach((reportDataResultRow) => {
        let processedReportDataResultLine = reportDataResultLineHtml;
        
        if (Object(reportDataResultRow)['subline_text_number'] && Object(reportDataResultRow)['upper_text']) {
            processedReportDataResultLine = reportDataResultLineWithSublineAndUpperTextHtml;
        }

        Object.keys(reportDataResultRow)
            .forEach((reportDataResultRowKey) => {
                processedReportDataResultLine = processedReportDataResultLine
                    .replace(`{{ $${reportDataResultRowKey} }}`, reportDataResultRow[reportDataResultRowKey]);
            })

        processedReportDataResultLines.push(processedReportDataResultLine);
    })

    const processedReportDataResults = reportDataResultsWrapperHtml;
    
    return processedReportDataResults
        .replace(`{{ $report_data_result_lines }}`, processedReportDataResultLines)
        .replace(`{{ $platform_url }}`, alertPayload.platform_url);
}

const parseAlertsReportResults = (reportResults) => {
    const processedReportResultsRows = [];
    
    reportResults.forEach((reportResultRow, reportResultRowKey) => {
        const processedReportResultsLines = [];

        reportResultRow.report_result_lines
            .forEach((reportResultLine) => {
                let processedReportResultLine = reportResultLineType(reportResultLine);
                
                Object.keys(reportResultLine)
                    .forEach(reportResultLineKey => {
                        processedReportResultLine = processedReportResultLine
                            .replace(`{{ $${reportResultLineKey} }}`, reportResultLine[reportResultLineKey])
                    });
                
                processedReportResultsLines.push(processedReportResultLine);
            });

        let processedReportResultRowHtml = reportResultRowHtml;
        Object.keys(reportResultRow)
            .forEach((reportResultRowKey) => {
                processedReportResultRowHtml = processedReportResultRowHtml
                    .replace(`{{ $${reportResultRowKey} }}`, reportResultRow[reportResultRowKey]);
            });
        
        processedReportResultRowHtml += Object.values(processedReportResultsLines);
        
        processedReportResultsRows.push(processedReportResultRowHtml);
        if (reportResultRowKey < (reportResults.length - 1)) {
            processedReportResultsRows.push(reportResultRowSeparator);
        }
    });

    const processedReportResults = reportResultsWrapperHtml;
    
    return processedReportResults.replace(`{{ $report_results }}`, processedReportResultsRows);
}

const reportResultLineType = (reportResultLine) => {
    const prefixAndColored = reportResultLine['report_result_prefix_text'] !== ''
        && reportResultLine['report_result_colored_text'] !== ''
        && reportResultLine['report_result_suffix_text'] === null;

    const ColoredAndSuffix = reportResultLine['report_result_prefix_text'] === null
        && reportResultLine['report_result_colored_text'] !== ''
        && reportResultLine['report_result_suffix_text'] !== '';
    
    if (prefixAndColored) {
        return reportResultLinePrefixAndColoredHtml;
    }

    if (ColoredAndSuffix) {
        return reportResultLineColoredAndSuffixHtml;
    }

    return reportResultLineHtml;
};

const parseDateStringToFormatedDateString = (dateString) => {
    debugger
    const year = dateString.substr(0, 4);
    const month = dateString.substr(5, 2);
    const day = dateString.substr(8)
    const months = [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez'
    ];

    return day + ' de ' + months[parseInt(month) - 1] + ' de ' + year;
}

const parseFooter = (reportParams) => {
    let processedFooterHtml = footerHtml;
    
    Object.keys(reportParams)
        .forEach((key) => {
            processedFooterHtml = processedFooterHtml.replace(`{{ $${key} }}`, reportParams[key]);
        })

    return processedFooterHtml;
}
