/*
 * Splunk patterns
 *
 * @author Xander Johnson (metasyn)
 * @version 0.0.1
 */
Rainbow.extend('splunk', [
    {
        'name': 'command',
        'pattern': /\b(abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|append|appendcols|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|crawl|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|(kv)|fieldformat|fields|fieldsummary|filldown|fillnull|findkeywords|findtypes|folderize|foreach|format|gauge|gentimes|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|map|metadata|metasearch|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|set|setfields|sendemail|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)/g
    },
    {
        'name': 'eval.function',
        'pattern': /\b(trim|upper|pow|random|substr|replace|isnull|urldecode|null|searchmatch|if|relative_time|log|floor|ln|mvjoin|strptime|sqrt|coalesce|abs|split|pi|nullif|match|cidrmatch|ltrim|isint|mvfilter|max|len|ceil|isnotnull|tonumber|rtrim|validate|now|exact|md5|case|lower|mvindex|like|mvcount|isstr|min|isnum|isbool|substr|typeof|exp|time|tostring|round|strftime)(?=\()/g
    },
    {
        'name': 'stats.function',
        'patern': /\b(avg|count|dc|first|last|list|max|median|min|mode|perc|range|stdev|stdevp|sum|sumsq|values|var)(?=\()/g
    },
    {
        'name': 'splunk.clause',
        'pattern': /\b(to|as|by|over|output)/g
    },
    {
        'name': 'splunk.strptime',
        'pattern': /(%E|%H|%I|%k|%M|%N|%p|%Q|%S|%s|%T|%Z|%z|%%|%F|%A|%a|%d|%e|%j|%w|%b|%B|%m|%y|%Y)/g
    },
    {
        'name': 'splunk.default.fields',
        'pattern': /\b(host|source|sourcetype)/g
    },
    {
        'name': 'constant.language',
        'pattern': /(true|false)/g
    }
], false);